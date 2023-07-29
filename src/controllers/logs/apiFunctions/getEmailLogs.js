import pool from "../../../utils/MySQL/db.js";
import errorMessages from "../../../utils/constants/errorMessages.js";

async function getEmailLogs(req, res,next) {
	if (req.query.student_id || req.query.type_name || req.query.start_date || req.query.end_date) {
		return getfilteredEmailLogs(req, res);
	} else {
		try {
			const [results] = await pool.query("SELECT * FROM email_log ORDER BY log_time DESC");
			return res.status(200).json(results);
		} catch (error) {
			next(error);
		}
	}
}

async function getfilteredEmailLogs(req, res,next) {

	const { student_id, type_name, start_date, end_date } = req.query;

	let sql = "SELECT * FROM email_log";

	// Add WHERE clauses based on the query parameters
	const whereClauses = [];
	const params = [];

	if (student_id) {
		whereClauses.push("student_id LIKE ?");
		params.push(`%${student_id}%`);
	}

	if (type_name) {
		whereClauses.push("type_name = LIKE ?");
		params.push(`%${type_name}%`);
	}

	if (start_date) {
		whereClauses.push("log_time >= ?");
		params.push(start_date);
	}

	if (end_date) {
		whereClauses.push("log_time <= ?");
		params.push(end_date);
	}

	if (whereClauses.length > 0) {
		sql += " WHERE " + whereClauses.join(" AND ");
	}

	// Add ORDER BY clause to sort by request_time
	sql += " ORDER BY log_time DESC";

	try {
		const [results] = await pool.query(sql, params);
		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
}

export { getEmailLogs };
