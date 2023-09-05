import React from 'react';
import NavBar from './components/NavBar';
import CreateBlog from './components/CreateBlog';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ManageBlogs from './components/ManageBlog';
import HomeBlog from './components/HomeBlog';
import EditBlog from './components/EditBlog';
function App() {
  return <>
  <BrowserRouter>
  <div>
  <NavBar/>
  </div>
  <div>
    <Routes>
      <Route path='/create' element={<CreateBlog/>}/>
      <Route path='/manage' element={<ManageBlogs/>}/>
      <Route path='/' element={<HomeBlog/>}/>
      <Route path='/edit/:id' element={<EditBlog/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  <div></div>
  </>
}

export default App;
