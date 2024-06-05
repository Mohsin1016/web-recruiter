import express from "express"
import mysql from "mysql"
import util from "util";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import bcrypt from "bcryptjs";
const saltRounds = 10

configDotenv();

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QWERTY@12345",
    database: "jobportaldb"
})

// if there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'QWERTY@12345'

db.query = util.promisify(db.query);

app.use(express.json())
app.use(cors());
app.use(cookieParser());

// fresher api for email validation 
app.post("/validate-email", (req, res) => {
    const { email } = req.body;

    const q = "SELECT COUNT(*) AS count FROM freshers WHERE email = ?";
    db.query(q, [email], (err, data) => {
        if (err) {
            console.error("Error validating email:", err);
            return res.status(500).json({ error: "Error validating email" });
        }

        const emailExists = data[0].count > 0;
        return res.json({ emailExists });
    });
});

// professional api for email validation
app.post("/validate-email-pro", (req, res) => {
    const { email } = req.body;

    const q = "SELECT COUNT(*) AS count FROM professionals WHERE email = ?";
    db.query(q, [email], (err, data) => {
        if (err) {
            console.error("Error validating email:", err);
            return res.status(500).json({ error: "Error validating email" });
        }

        const emailExists = data[0].count > 0;
        return res.json({ emailExists });
    });
});

// api post method for storing all data from freshers forms.
app.post("/freshers", async (req, res) => {
    const q = "INSERT INTO freshers (`name`, `email`, `contactNumber`, `password`, `resume`, `gender`, `highestEducation`, `courseType`, `passingOutYear`, `gradingSystem`, `marks`, `institute`, `dob`, `maritalStatus`, `language`, `currentAddress`, `permanentAddress`, `certification`, `resumeHeadline`, `summary`, `appliedDate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE())";
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log(hashedPassword);
        const values = [
            req.body.name,
            req.body.email,
            req.body.contactNumber,
            hashedPassword,
            req.body.resume,
            req.body.gender,
            req.body.highestEducation,
            req.body.courseType,
            req.body.passingOutYear,
            req.body.gradingSystem,
            req.body.marks,
            req.body.institute,
            req.body.dob,
            req.body.maritalStatus,
            req.body.language,
            req.body.currentAddress,
            req.body.permanentAddress,
            req.body.certification,
            req.body.resumeHeadline,
            req.body.summary
        ];

        db.query(q, values, (err, data) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ error: "Error inserting data" });
            }
            console.log("Data inserted successfully");
            return res.json({ message: "Data inserted successfully in Freshers table" });
        });
    } catch (error) {
        console.error("Error hashing password:", error);
        return res.status(500).json({ error: "Error hashing password" });
    }
})

// api post method for storing all data from professionals forms.
app.post("/professionals", async (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;  // will initialize all fields like this later . professional way...!!!
    const q = `
    INSERT INTO professionals (
        name, email, mobile, password, resume, gender, highestEducation, courseType, 
        passingOutYear, gradingSystem, marks, institute, organizationName, designation, 
        currentCompany, workingFrom, currentSalary, noticePeriod, keySkills, describeProfile, 
        dob, maritalStatus, language, currentAddress, permanentAddress, desiredIndustry, 
        desiredDepartment, desiredRole, desiredEmployment, desiredJobType, expectedCTC, 
        preferredShift, desiredCity, certification, resumeHeadline, summary, appliedDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE())
`;
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log(hashedPassword);
        const values = [
            req.body.name,
            req.body.email,
            req.body.mobile,
            hashedPassword,
            req.body.resume,
            req.body.gender,
            req.body.highestEducation,
            req.body.courseType,
            req.body.passingOutYear,
            req.body.gradingSystem,
            req.body.marks,
            req.body.institute,
            req.body.organizationName,
            req.body.designation,
            req.body.currentCompany,
            req.body.workingFrom,
            req.body.currentSalary,
            req.body.noticePeriod,
            req.body.keySkills,
            req.body.describeProfile,
            req.body.dob,
            req.body.maritalStatus,
            req.body.language,
            req.body.currentAddress,
            req.body.permanentAddress,
            req.body.desiredIndustry,
            req.body.desiredDepartment,
            req.body.desiredRole,
            req.body.desiredEmployment,
            req.body.desiredJobType,
            req.body.expectedCTC,
            req.body.preferredShift,
            req.body.desiredCity,
            req.body.certification,
            req.body.resumeHeadline,
            req.body.summary
        ];

        db.query(q, values, (err, data) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ error: "Error inserting data" });
            }
            console.log("Data inserted successfully");
            return res.json({ message: "Data inserted successfully in Professional table" });
        });
    } catch (error) {
        console.error("Error hashing password:", error);
        return res.status(500).json({ error: "Error hashing password" });
    }
})

// api post method for storing all data from recruiter forms.
app.post("/recruiters", (req, res) => {
    console.log(req.body);
    const q = `
    INSERT INTO recruiters
      ( mobileNumber, companyName, companyType, contactNumber, mailId,
      since, teamSize, webLink, logo, bankCoverImg, officialPic, about,
      recruiterName, recruiterNumber, recruiterAltNumber, recruiterMailId,
      gender, role, language, age, experience ,status, appliedDate
      ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE())
      `;

    const values = [
        req.body.mobileNumber,
        req.body.companyName,
        req.body.companyType,
        req.body.contactNumber,
        req.body.mailId,
        req.body.since,
        req.body.teamSize,
        req.body.webLink,
        req.body.logo,
        req.body.bankCoverImg,
        req.body.officialPic,
        req.body.about,
        req.body.recruiterName,
        req.body.recruiterNumber,
        req.body.recruiterAltNumber,
        req.body.recruiterMailId,
        req.body.gender,
        req.body.role,
        req.body.language,
        req.body.age,
        req.body.experience,
        "Pending" //hardcoded value initially
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data" });
        }
        console.log("Data inserted successfully");
        return res.json({ message: "Data inserted successfully in Recruiters table" });
    });
})

// // login api for fresher user
app.post("/fresher-login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const q = "SELECT * FROM freshers WHERE email = ?";
        const trimmedEmail = email.trim();
        const fresherResults = await db.query(q, [trimmedEmail]);

        if (!fresherResults[0]) {
            return res.status(404).json({ error: "User not found...!" });
        }

        const foundFresher = fresherResults[0];

        const passwordMatch = await bcrypt.compare(password, foundFresher.password);
        console.log(passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ id: foundFresher.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
        });

        // setting jwt in cookies
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3600000,
        });

        return res.json({ token, message: "User logged in successfully" });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Error logging in", details: error.message });
    }
});

// login api for professional user
app.post("/professional-login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const q = "SELECT * FROM professionals WHERE email = ?";
        const trimmedEmail = email.trim();
        const proResult = await db.query(q, [trimmedEmail]);

        if (!proResult[0]) {
            return res.status(404).json({ error: "User not found" });
        }

        const foundPro = proResult[0];

        const passwordMatch = await bcrypt.compare(password, foundPro.password);
        console.log(passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ id: foundPro.id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1h",
        });

        // setting jwt in cookies
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 3600000,
        });

        return res.json({ token, message: "User logged in successfully" });
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Error logging in", details: error.message });
    }
});

app.listen(8800, () => {
    console.log("Connected to backend!...")
})