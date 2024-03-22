
// import React from 'react';
// import ProfilePage from './lander';
// function App() {
//   return (
//     <div>
//       <ProfilePage />
//     </div>
//   );
// }
// export default App;

import React from 'react';

import Background from './components/Background/Background';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Background/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

