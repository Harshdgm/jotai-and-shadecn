import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { DateRangeData } from "@/types/form";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type Props = {
  value: DateRangeData;
  onChange: (range: DateRangeData) => void;
};

export default function DateRangeInput({ value, onChange }: Props) {
  const [show, setShow] = useState(false);

  const startDate = new Date(value.startDate);
  const endDate = new Date(value.endDate);

  const handleRangeSelect = (ranges: RangeKeyDict) => {
    const r = ranges.selection;

    if (r?.startDate && r?.endDate) {
      onChange({
        startDate: r.startDate.toISOString(),
        endDate: r.endDate.toISOString(),
        key: "selection",
      });
    }
  };

  return (
    <div className="relative">
      <input
        readOnly
        value={`${startDate.toDateString()} - ${endDate.toDateString()}`}
        onClick={() => setShow(!show)}
        className="border p-2 rounded w-full"
      />

      {show && (
        <div className="absolute z-50 bg-white shadow-lg p-2">
          <DateRangePicker
            ranges={[
              {
                startDate,
                endDate,
                key: "selection",
              },
            ]}
            onChange={handleRangeSelect}
          />

          <button
            onClick={() => setShow(false)}
            className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
