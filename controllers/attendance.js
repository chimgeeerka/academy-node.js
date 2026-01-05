import { db } from "../db.js";


export const upsertAttendanceService = async (teacherId, studentId, date, attendance) => {
  // Herev bagshid oyutan hariyalagdaj baiwal
  const studentCheck = await db.query(
    [studentId, teacherId]
  );

  if (studentCheck.rows.length === 0) {
    throw new Error('Ene bagshid oyutan hariyalagdahgvi bna');
  }

  // Upsert attendance in the attendance_history table
  const response = await db.query(
    `INSERT INTO attendance_history (teacher_id, student_id, date, attendance) 
     VALUES ($1, $2, $3, $4) 
     ON CONFLICT (student_id, date) 
     DO UPDATE SET attendance = EXCLUDED.attendance 
     RETURNING *`,
    [teacherId, studentId, date, attendance]
  );
  
  return response.rows[0];
};


export async function getAttendanceByDateService(teacherId, date) {
  const response = await db.query(
    `SELECT u.id, u.firstname, u.lastname, ah.attendance 
     FROM attendance_history ah 
     JOIN users u ON ah.student_id = u.id 
     WHERE u.teacher_id = $1 AND ah.date = $2`,
    [teacherId, date]
  );

  return response.rows;
}


export async function getTeacherSummaryService(teacherId, sort) {
  let query = `SELECT * FROM v_student_attendance_summary WHERE teacher_id = $1`;
  
  if (sort) {
    query += ` ORDER BY ${sort}`;
  }

  const response = await db.query(query, [teacherId]);
  return response.rows;
}