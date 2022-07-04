const style = () => {
    const output = {
      root: {
        height: '20000px'
      },
      video: {
        position: 'fixed',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '& video': {
          width: "100vw",
          height: 'auto'
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
  