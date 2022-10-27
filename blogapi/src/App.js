import React from 'react';

class app extends React.Component {
  componentDidMount() {
    const apiUrl = "https://8000-arthurvguide-drfblogapp-5sb5ujnucks.ws-eu72.gitpod.io/api"
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data))
      
  }
  render() {
    return <div>Example Connection</div>
  }
}

export default app