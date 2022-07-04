const style = () => {
    const output = {
      root: {
        height: '50000px'
      },
      video: {
        position: 'fixed',
        top: '45%',
        left: '50%',
        height: '100vh',
        transform: 'translate(-50%, -50%)',
        '& video': {
          width: "100vw",
          height: '100vh'
        }
      },
      progressBar: {
        position: 'absolute',
        width: '100%',
        height: 3,
        background: 'cyan',
        bottom: -3,
        left: 0,
        transform: 'scaleX(0)',
        transformOrigin: '0 0'
      },


      
      
    }
    return output
  }
  
  export default style
  