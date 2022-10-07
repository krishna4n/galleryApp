import './index.css'

const Thumbnail = props => {
  const {thumbnailImages, clickedImage, activeImgId} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailImages
  const imageClicked = () => {
    clickedImage(id)
  }
  const imageStyle = activeImgId === id ? 'thumb-img-active' : 'thumb-img'

  return (
    <li>
      <button type="button" className="button" onClick={imageClicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={imageStyle} />
      </button>
    </li>
  )
}

export default Thumbnail
