"use client";

export default function DropDown({ sort, onSortChange }) {
  return (
    <div className="flex items-center justify-end gap-3 rounded-xl border bg-white p-4">
      <span className="text-xs text-gray-500">সাজান</span>

      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-lg border px-3 py-1.5 text-xs"
      >
        <option value="default">ডিফল্ট</option>
        <option value="low">দাম: কম থেকে বেশি</option>
        <option value="high">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
}
