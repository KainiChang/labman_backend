import pool from "../../../utils/MySQL/db.js";
import { checkUserDuplicate } from "../helperFunctions/checkUserDuplicate.js";

async function newUser(req, res,next) {
	const { student_id, email, password } = req.body;

	try {
		await checkUserDuplicate(pool, student_id);
		const query = "INSERT INTO students_user (student_id, email, password) VALUES (?, ?, ?)";
		const params = [student_id, email, password];
		await pool.query(query, params);

		return res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		next(error);
	}
}

//For recall module
export { newUser };
