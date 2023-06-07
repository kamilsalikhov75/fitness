import { Table } from "antd";
import "./timetable.css";
import { columns, data } from "./timetable-meta";

function Timetable() {
  return (
    <div className="timetable">
      <div className="timetable__block">
        <h1 className="title">Расписание занятий</h1>
        <Table
          scroll={{ x: "1200px" }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
}

export { Timetable };
