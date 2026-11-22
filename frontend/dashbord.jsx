import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { TOKEN_KEY } from "../api/client";
import Logo from "../components/Logo";

// ملاحظة: عدّل المسار "/api/stats" وأسماء الحقول حسب الـ backend الخاص بك.
const CARDS = [
  { key: "salesToday", label: "مبيعات اليوم", suffix: "MRU" },
  { key: "bottlesSold", label: "قنينات مباعة", suffix: "" },
  { key: "customers", label: "الزبائن", suffix: "" },
  { key: "stock", label: "المخزون المتبقي", suffix: "" },
];

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    api
      .get("/api/stats")
      .then(({ data }) => active && setStats(data))
      .catch((err) => {
        if (!active) return;
        if (err.response?.status === 401) {
          localStorage.removeItem(TOKEN_KEY);
          navigate("/login");
        } else {
          setError(err.response?.data?.error || "تعذر تحميل البيانات");
        }
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="flex items-center justify-between bg-navy-900 px-6 py-3 text-white shadow">
        <div className="flex items-center gap-3">
          <Logo width={40} circle />
          <h1 className="text-lg font-bold">بزيد للغاز</h1>
        </div>
        <button
          onClick={logout}
          className="rounded-lg bg-white/10 px-4 py-1.5 text-sm hover:bg-white/20"
        >
          تسجيل الخروج
        </button>
      </header>

      <main className="mx-auto max-w-5xl p-6">
        <h2 className="mb-4 text-xl font-semibold text-navy-900">لوحة التحكم</h2>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.key} className="rounded-2xl bg-white p-5 shadow">
              <p className="text-sm text-gray-500">{c.label}</p>
              <p className="mt-2 text-3xl font-bold text-navy-900">
                {loading ? "..." : stats[c.key] ?? 0}
                {c.suffix && <span className="mr-1 text-sm font-normal text-gray-400">{c.suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
