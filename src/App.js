// ************************************************************************************************
// ************************************************************************************************
// EXAMPLE 1
// ************************************************************************************************
// ************************************************************************************************

// import React, { useContext, createContext } from "react";

// const TestContext = createContext();

// const TestContext2 = createContext();

// const UseContextExample = () => {
//   const hello = useContext(TestContext);
//   const world = useContext(TestContext2);
//   return <div>{hello + " " + world}</div>;
// };

// function App() {
//   return (
//     <div className="App">
//       <TestContext.Provider value="hello">
//         <TestContext2.Provider value="world!">
//           <UseContextExample />
//         </TestContext2.Provider>
//       </TestContext.Provider>
//     </div>
//   );
// }

// export default App;

//************************************************************************************************
//************************************************************************************************
// EXAMPLE 2
//************************************************************************************************
//************************************************************************************************

// import React, { createContext, useContext } from "react";

// // 0. AppContext 생성
// const AppContext = createContext();

// const App = () => {
//   const user = {
//     name: "daseul",
//     isAdmin: true,
//   };

//   return (
//     <AppContext.Provider value={user}>
//       <div>
//         <Posts />
//       </div>
//     </AppContext.Provider>
//   );
// };

// // 1. PostsContext 생성
// const PostsContext = createContext();

// const Posts = () => {
//   const posts = [
//     {
//       title: "useContext란 무엇인가",
//       content: "상태관리 hooks인 useContext는 ...",
//     },
//   ];

//   return (
//     <PostsContext.Provider value={posts}>
//       <Children />
//     </PostsContext.Provider>
//   );
// };

// // 2. user와 posts를 가져와 화면에 보여주기
// const Children = () => {
//   const user = useContext(AppContext);
//   const posts = useContext(PostsContext);

//   let label = "user";
//   if (user.isAdmin) {
//     label = "admin";
//   }

//   return (
//     <div>
//       <div>{label}</div>
//       <div>{user.name}</div>
//       <div>
//         {posts.map((post, index) => (
//           <div key={index}>
//             <div>{post.title}</div>
//             <div>{post.content}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

//************************************************************************************************
//************************************************************************************************
// EXAMPLE 3
//************************************************************************************************
//************************************************************************************************

// 아래는 Provider와 Consumer 함수를 활용한 Context API. 위의 hooks와 비교를 위해 어떤 것이 더 사용하기 편한지 비교하기 위함.

// import React, { createContext } from "react";

// // 0. AppContext 생성
// const AppContext = createContext();

// const App = () => {
//   const user = {
//     name: "daseul",
//     isAdmin: true,
//   };

//   return (
//     <AppContext.Provider value={user}>
//       <div>
//         <Posts />
//       </div>
//     </AppContext.Provider>
//   );
// };

// // 1. PostsContext 생성
// const PostsContext = createContext();

// const Posts = () => {
//   const posts = [
//     {
//       title: "useContext란 무엇인가",
//       content: "상태관리 hooks인 useContext는 ...",
//     },
//   ];

//   return (
//     <PostsContext.Provider value={posts}>
//       <Children />
//     </PostsContext.Provider>
//   );
// };

// // 2. user와 posts를 가져와 화면에 보여주기
// const Children = () => (
//   <AppContext.Consumer>
//     {(user) => (
//       <PostsContext.Consumer>
//         {(posts) => {
//           let label = "user";
//           if (user.isAdmin) {
//             label = "admin";
//           }

//           return (
//             <div>
//               <div>{label}</div>
//               <div>{user.name}</div>
//               <div>
//                 {posts.map((post, index) => (
//                   <div key={index}>
//                     <div>{post.title}</div>
//                     <div>{post.content}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         }}
//       </PostsContext.Consumer>
//     )}
//   </AppContext.Consumer>
// );

// export default App;

//************************************************************************************************
//************************************************************************************************
// EXAMPLE 4
//************************************************************************************************
//************************************************************************************************

import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}
