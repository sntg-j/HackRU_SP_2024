import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function PathFindingPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch HTML file content
    fetch('./AStart.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error loading HTML file:', error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: htmlContent}}/>);
    // function PathFindingPage() {
      //   useEffect(() => {
        //     // Load JavaScript files
        //     const scripts = [
          //       'libraries/p5.dom.js',
          //       'libraries/p5.js',
          //       'map/searchmap.js',
          //       'map/mazemap.js',
          //       'map/bspmap.js',
          //       'Spot.js',
          //       'Sketch.js',
          //       'map/mapfactory.js',
          //       'A_Star.js',
          //     ];
          
//     scripts.forEach(script => {
  //       const scriptTag = document.createElement('script');
  //       scriptTag.src = script;
  //       scriptTag.async = false;
  //       // scriptTag.onload = () => {
    //       //   // Script loaded successfully
    //       // };
    //       document.body.appendChild(scriptTag);
    //     });
    
    //     return () => {
      //       // Cleanup
      //       scripts.forEach(script => {
        //         const scriptTag = document.querySelector(`script[src="${script}"]`);
        //         if (scriptTag) {
          //           document.body.removeChild(scriptTag);
          //         }
          //       });
          //     };
          //   }, []);
          
          //   return (
            //     <div>
            //       <svg width="100" height="100">
            //         <circle cx="50" cy="50" r="40" stroke="black" strokeWidth={3} fill="red" />
//       </svg>
//     </div>
//   );
// }

}
export default PathFindingPage;
