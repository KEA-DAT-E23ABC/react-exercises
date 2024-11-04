// REACT ROUTER
import { Route, Routes } from "react-router-dom";

// ROOT LAYOUT
import Layout from "./Layout";

// PAGES
import Home from "./pages/HomePage";
import PropsPage from "./pages/PropsPage";
import StatePage from "./pages/StatePage";
import FetchPage from "./pages/FetchPage";
import FetchIdPage from "./pages/FetchIdPage";
import TodosPage from "./pages/TodosPage";
import ConditionalRenderPage from "./pages/ConditionalRenderPage";
import ListsPage from "./pages/ListsPage";
import FormsPage from "./pages/FormsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/conditionalrender" element={<ConditionalRenderPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/fetch/:id" element={<FetchIdPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
