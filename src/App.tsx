import { useCounterStore } from './store/counterStore';
import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import './App.css'

function App() {

  const { title, count, posts } = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow);

  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, [])  

  return (
    <div className="App">
      <h1>{title}: {count}</h1>
      <button className='button' onClick={() => {increment(10)}}>+ 10</button>
      <br />
      <button className='button' onClick={() => {multiply(2)}}>* 2</button>
      <br />
      <button className='button' onClick={() => clearStore()}>Clear</button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  )
}

export default App
