import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import useRestoreScrollOnRefresh from "./hooks/useScrollRestoration";
import Header from "./components/microsoft365ui/Header";
import Microsoft365 from "./pages/Microsoft365";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Technologies = lazy(() => import("@/pages/Technologies"));
const Industries = lazy(() => import("@/pages/Industries"));
const Hire = lazy(() => import("@/pages/Hire"));
const Insights = lazy(() => import("@/pages/Insights"));
const Company = lazy(() => import("@/pages/Company"));
const Contact = lazy(() => import("@/pages/Contact"));

export default function App() {
  useRestoreScrollOnRefresh();
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/*" element={<Services />} />
          <Route path="microsoft-365" element={<Microsoft365 />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="industries" element={<Industries />} />
          <Route path="hire" element={<Hire />} />
          <Route path="insights" element={<Insights />} />
          <Route path="company/*" element={<Company />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
