import React, { useState, useEffect, useRef } from 'react'
import './createfood.css'
import axios from 'axios';

const CreateFood = () => {
  const [videoName, setVideoName] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [videoSize, setVideoSize] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const inputRef = useRef(null)

  const onVideoChange = (e, fileFromDrop) => {
    const file = fileFromDrop || (e?.target?.files && e.target.files[0])
    if (file) {
      setVideoName(file.name)
      setVideoSize(file.size)
      if (videoPreview) URL.revokeObjectURL(videoPreview)
      const url = URL.createObjectURL(file)
      setVideoPreview(url)
    } else {
      if (videoPreview) URL.revokeObjectURL(videoPreview)
      setVideoPreview(null)
      setVideoName(null)
      setVideoSize(null)
    }
    setDragActive(false)
  }

  const clearVideo = () => {
    if (videoPreview) URL.revokeObjectURL(videoPreview)
    setVideoPreview(null)
    setVideoName(null)
    setVideoSize(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]
    if (file) onVideoChange(null, file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    // TODO: wire up submit to API/service
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('video', videoName);

    const response = await axios.post("http://localhost:3000/api/food", formData, {
      withCredentials: true,
    });
    console.log(response.data);
  }

  useEffect(() => {
    return () => {
      if (videoPreview) URL.revokeObjectURL(videoPreview)
    }
  }, [videoPreview])

  return (
    <div className="create-food-page">
      <form className="create-food-card" onSubmit={onSubmit}>
        <h2 className="cf-title">Create Food</h2>

        <label className="field">
          <span className="label">Video</span>
          <div className="video-input-wrap">
            <div
              className={`video-dropzone ${dragActive ? 'dragover' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                ref={inputRef}
                id="videoFile"
                type="file"
                accept="video/*"
                className="input-file"
                onChange={onVideoChange}
              />

              <label htmlFor="videoFile" className="video-input-btn" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M17 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5l4 4v-11l-4 4z" fill="currentColor"/>
                </svg>
                <span className="video-input-text">{videoName || 'Choose video'}</span>
              </label>

              <div className="video-info">{videoName ? `Selected: ${videoName} • ${Math.round(videoSize/1024)} KB` : 'Drop video here or click to choose • Max 50MB'}</div>

              {videoName && (
                <button type="button" className="clear-btn" onClick={clearVideo} aria-label="Remove video">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>

            <div className="video-info">{videoName || 'No video selected'}</div>
            {videoPreview && (
              <video
                className="video-preview"
                controls
                src={videoPreview}
              />
            )}
          </div>
        </label>

        <label className="field">
          <span className="label">Name</span>
          <input
            className="input"
            type="text"
            placeholder="Meal name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="label">Description</span>
          <textarea
            className="input textarea"
            placeholder="Short description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <div className="actions">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateFood
