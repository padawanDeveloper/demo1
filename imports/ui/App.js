import React, { Component } from 'react';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
        <ImagesUploader
                url="http://localhost:9090/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
        />
      </div>

      
    );
  }
}