import React from 'react';
import PostPhotoImageLoading from './PostPhotoImageLoading';
import PostPhotoButtons from './PostPhotoButtons';
import PostPhotoImages from './PostPhotoImages';
 
export default class PostPhotoImageProcess extends React.Component {
 
  render() {

    const { uploading, images } = this.props.theState;
  
    const content = () => {
 
      switch(true) {
        case uploading: 
          return <PostPhotoImageLoading />
        case images.length > 0: 
          return <PostPhotoImages images={this.props.images} removeImage={this.props.removeImage} />
        default: 
          return <PostPhotoButtons onChange={this.props.onChange} noPhoto={this.props.noPhoto}/> 
      }
       
    } 
  
    return (

      <div>
        <div>
          {content()}
        </div>
      </div>

    )
 
  }
 
}

