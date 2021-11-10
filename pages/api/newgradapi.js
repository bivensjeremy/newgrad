import prisma from "../../config/prismaClient";

export default async (req, res) => {
    const { firstName, lastName, email, phone, school, graduationYear, program, extern, department, position } = req.body
    
    await prisma.student.create({
        data:{
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            phone: phone,
            school: school,
            graduationYear: graduationYear,
            program: program,
            extern: extern,
            department: department,
            position: position,
        }
    }),
    res.json({
        status: 'success'
    })
}