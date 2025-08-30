import "../styles/hours-table.css";
import { hours } from "../../shared/data/hours";

export const HoursTable = () => {
  return (
    <table className="md:text-lg text-md">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {hours.map((day) => (
          <tr key={day.day}>
            <td>{day.day}</td>
            <td className="openHour">
              {day.isOpen ? day.start + " - " + day.end : "Closed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
