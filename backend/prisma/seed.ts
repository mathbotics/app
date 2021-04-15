import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()
async function main() {
  const adminUser = await prisma.admin.create({
    data: {
      user: {
        create: {
          instructor: undefined,
          guardian: undefined,
          student: undefined,
          firstName: 'John',
          lastName: 'Doe',
          username: 'admin',
          password: await bcrypt.hash('admin', 10),
        },
      },
      email: 'admin@test.com'
    },
    include: { user: true },
  });
  const instructorUser1 = await prisma.instructor.create({
    data: {
      user: {
        create: {
          firstName: 'Alejandra',
          lastName: 'Massuh',
          username: 'alemassuh',
          password: await bcrypt.hash('instructor', 10),
        },
      },
      email: 'alemassuh@test.com'
    },
    include: { user: true },
  });
  const instructorUser2 = await prisma.instructor.create({
    data: {
      user: {
        create: {
          firstName: 'Greg',
          lastName: 'Reis',
          username: 'greis',
          password: await bcrypt.hash('instructor', 10),
        },
      },
      email: 'greis@test.com'
    },
    include: { user: true },
  });

  //Lesson list

  const lesson1 = await prisma.lesson.create({
    data: {
        title:"Robotics Overview",
        time:"15 minutes",
        difficultyLevel:"Easy"
    },
    include: {slides: true}
  });
  const lesson2 = await prisma.lesson.create({
    data: {
        title:"Propulsion",
        time:"30 minutes",
        difficultyLevel:"Medium"
    },
    include: {slides: true}
  });
  const lesson3 = await prisma.lesson.create({
    data: {
        title:"Programming Fundamentals",
        time:"30 minutes",
        difficultyLevel:"Hard"
    },
    include: {slides: true}
  });
  const lesson4 = await prisma.lesson.create({
    data: {
        title:"Microprocessor Basics",
        time:"45 minutes",
        difficultyLevel:"Medium"
    },
    include: {slides: true}
  });

  const lesson5 = await prisma.lesson.create({
    data: {
        title:"Data Structures",
        time:"45 minutes",
        difficultyLevel:"Medium"
    },
    include: {slides: true}
  });

  const lesson6 = await prisma.lesson.create({
    data: {
        title:"Concepts of Engineering Math",
        time:"60 minutes",
        difficultyLevel:"Hard"
    },
    include: {slides: true}
  });

  const lesson7 = await prisma.lesson.create({
    data: {
        title:"Strings and Arrays",
        time:"30 minutes",
        difficultyLevel:"Easy"
    },
    include: {slides: true}
  });

  const lesson8 = await prisma.lesson.create({
    data: {
        title:"Evolution and Classification",
        time:"45 minutes",
        difficultyLevel:"Medium"
    },
    include: {slides: true}
  });

  const lesson9 = await prisma.lesson.create({
    data: {
        title:"Automation and Patents",
        time:"30 minutes",
        difficultyLevel:"Medium"
    },
    include: {slides: true}
  });

  const lesson10 = await prisma.lesson.create({
    data: {
        title:"Classes and Objects",
        time:"15 minutes",
        difficultyLevel:"Easy"
    },
    include: {slides: true}
  });

  const lesson11 = await prisma.lesson.create({
    data: {
        title:"Loops",
        time:"45 minutes",
        difficultyLevel:"Easy"
    },
    include: {slides: true}
  });

  //Course List

  const course1 = await prisma.course.create({
    data: {
      name: "Introduction to Robotics",
      description: "",
      suggestedLevel: "NINTH",
      instructorId: instructorUser1.id
    },
    include: {
      instructor: {
        include: {
          user: true
        }
      }
    }
  });

  const course2 = await prisma.course.create({
    data: {
      name: "Introduction to Python",
      description: "",
      suggestedLevel: "TENTH",
      instructorId: instructorUser1.id
    },
    include: {
      instructor: {
        include: {
          user: true
        }
      }
    }
  });

  const course3 = await prisma.course.create({
    data: {
      name: "Introduction to Java",
      description: "",
      suggestedLevel: "ELEVENTH",
      instructorId: instructorUser2.id
    },
    include: {
      instructor: {
        include: {
          user: true
        }
      }
    }
  });

  const course4 = await prisma.course.create({
    data: {
      name: "Introduction to Circuits",
      description: "",
      suggestedLevel: "ELEVENTH",
      instructorId: instructorUser2.id
    },
    include: {
      instructor: {
        include: {
          user: true
        }
      }
    }
  });

  const course5 = await prisma.course.create({
    data: {
      name: "Introduction to Applied Engineering",
      description: "",
      suggestedLevel: "ELEVENTH",
      instructorId: instructorUser2.id
    },
    include: {
      instructor: {
        include: {
          user: true
        }
      }
    }
  });
  
  // Course to lesson

  const binding_course1_lesson1 = await prisma.courseToLesson.create({
    data: {
        courseId: course1.id,
        lessonId: lesson1.id
    }
  });
  const binding_course1_lesson9 = await prisma.courseToLesson.create({
    data: {
        courseId: course1.id,
        lessonId: lesson9.id
    }
  });
  const binding_course2_lesson3 = await prisma.courseToLesson.create({
    data: {
        courseId: course2.id,
        lessonId: lesson3.id
    }
  });
  const binding_course2_lesson7 = await prisma.courseToLesson.create({
    data: {
        courseId: course2.id,
        lessonId: lesson7.id
    }
  });
  const binding_course2_lesson10 = await prisma.courseToLesson.create({
    data: {
        courseId: course2.id,
        lessonId: lesson10.id
    }
  });
  const binding_course3_lesson3 = await prisma.courseToLesson.create({
    data: {
        courseId: course3.id,
        lessonId: lesson3.id
    }
  });
  const binding_course3_lesson5 = await prisma.courseToLesson.create({
    data: {
        courseId: course3.id,
        lessonId: lesson5.id
    }
  });
  const binding_course3_lesson11 = await prisma.courseToLesson.create({
    data: {
        courseId: course3.id,
        lessonId: lesson11.id
    }
  });
  const binding_course4_lesson4 = await prisma.courseToLesson.create({
    data: {
        courseId: course4.id,
        lessonId: lesson4.id
    }
  });
  const binding_course5_lesson2 = await prisma.courseToLesson.create({
    data: {
        courseId: course5.id,
        lessonId: lesson2.id
    }
  });
  const binding_course5_lesson6 = await prisma.courseToLesson.create({
    data: {
        courseId: course5.id,
        lessonId: lesson6.id
    }
  });
  const binding_course5_lesson8 = await prisma.courseToLesson.create({
    data: {
        courseId: course5.id,
        lessonId: lesson8.id
    }
  });

  // Add Students

  const student1 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "FSerrano",
          password: await bcrypt.hash(
            `FSerrano`,
            10,
          ),
          firstName: "Fernando",
          lastName: "Serrano"
        },
      },
      gradeLevel: "NINTH",
    },
    include: { user: true, studentTo: true },
  })

  const student2 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CVillarroel",
          password: await bcrypt.hash(
            `CVillarroel`,
            10,
          ),
          firstName: "Cristina",
          lastName: "Villarroel"
        },
      },
      gradeLevel: "NINTH",
    },
    include: { user: true, studentTo: true },
  })

  const student3 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "ATorres",
          password: await bcrypt.hash(
            `ATorres`,
            10,
          ),
          firstName: "Adam",
          lastName: "Torres"
        },
      },
      gradeLevel: "NINTH",
    },
    include: { user: true, studentTo: true },
  })

  const student4 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "EArroyo",
          password: await bcrypt.hash(
            `EArroyo`,
            10,
          ),
          firstName: "Estefani",
          lastName: "Arroyo"
        },
      },
      gradeLevel: "NINTH",
    },
    include: { user: true, studentTo: true },
  })

  const student5 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CCHanel",
          password: await bcrypt.hash(
            `CChanel`,
            10,
          ),
          firstName: "Coco",
          lastName: "Chanel"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student6 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "KLagerfeld",
          password: await bcrypt.hash(
            `KLagerfeld`,
            10,
          ),
          firstName: "Karl",
          lastName: "Lagerfeld"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student7 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "GVersace",
          password: await bcrypt.hash(
            `GVersace`,
            10,
          ),
          firstName: "Gianni",
          lastName: "Versace"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student8 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "GArmani",
          password: await bcrypt.hash(
            `GArmani`,
            10,
          ),
          firstName: "Giorgio",
          lastName: "Armani"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student9 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CDior",
          password: await bcrypt.hash(
            `CDior`,
            10,
          ),
          firstName: "Christian",
          lastName: "Dior"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student10 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "YSLaurent",
          password: await bcrypt.hash(
            `YSLaurent`,
            10,
          ),
          firstName: "Yves Saint",
          lastName: "Laurent"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student11 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "RCavalli",
          password: await bcrypt.hash(
            `RCavalli`,
            10,
          ),
          firstName: "Roberto",
          lastName: "Cavalli"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student12 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "MJacobs",
          password: await bcrypt.hash(
            `MJacobs`,
            10,
          ),
          firstName: "Marc",
          lastName: "Jacobs"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student13 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "DDolce",
          password: await bcrypt.hash(
            `DDolce`,
            10,
          ),
          firstName: "Domenico",
          lastName: "Dolce"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student14 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "SGabbana",
          password: await bcrypt.hash(
            `SGabbana`,
            10,
          ),
          firstName: "Stefano",
          lastName: "Gabbana"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student15 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "AMcQueen",
          password: await bcrypt.hash(
            `AMcQueen`,
            10,
          ),
          firstName: "Alexander",
          lastName: "McQueen"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student16 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "ORousteing",
          password: await bcrypt.hash(
            `ORousteing`,
            10,
          ),
          firstName: "Olivier",
          lastName: "Rousteing"
        },
      },
      gradeLevel: "TENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student17 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CKlein",
          password: await bcrypt.hash(
            `CKlein`,
            10,
          ),
          firstName: "Calvin",
          lastName: "Klein"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student18 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "DVersace",
          password: await bcrypt.hash(
            `DVersace`,
            10,
          ),
          firstName: "Donatella",
          lastName: "Versace"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })
  
  const student19 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "RLauren",
          password: await bcrypt.hash(
            `RLauren`,
            10,
          ),
          firstName: "Ralph",
          lastName: "Lauren"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student20 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "TFord",
          password: await bcrypt.hash(
            `TFord`,
            10,
          ),
          firstName: "Tom",
          lastName: "Ford"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student21 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CLouboutin",
          password: await bcrypt.hash(
            `CLouboutin`,
            10,
          ),
          firstName: "Christian",
          lastName: "Louboutin"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student22 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "MPrada",
          password: await bcrypt.hash(
            `MPrada`,
            10,
          ),
          firstName: "Miuccia",
          lastName: "Prada"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })
  
  const student23 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "CHerrera",
          password: await bcrypt.hash(
            `CHerrera`,
            10,
          ),
          firstName: "Carolina",
          lastName: "Herrera"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student24 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "JPGaultier",
          password: await bcrypt.hash(
            `JPGaultier`,
            10,
          ),
          firstName: "Jean-Paul",
          lastName: "Gaultier"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  const student25 =  await prisma.student.create({
    data: {
      user: {
        create: {
          username: "VWang",
          password: await bcrypt.hash(
            `VWang`,
            10,
          ),
          firstName: "Vera",
          lastName: "Wang"
        },
      },
      gradeLevel: "ELEVENTH",
    },
    include: { user: true, studentTo: true },
  })

  // Add student to course

  const course1_student1 = await prisma.courseToStudent.create({
    data: {
      courseId: course1.id,
      studentId: student1.id
    }
  })

  const course1_student2 = await prisma.courseToStudent.create({
    data: {
      courseId: course1.id,
      studentId: student2.id
    }
  })

  const course1_student3 = await prisma.courseToStudent.create({
    data: {
      courseId: course1.id,
      studentId: student3.id
    }
  })

  const course1_student4 = await prisma.courseToStudent.create({
    data: {
      courseId: course1.id,
      studentId: student4.id
    }
  })

  const course2_student5 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student5.id
    }
  })

  const course2_student6 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student6.id
    }
  })

  const course2_student7 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student7.id
    }
  })

  const course2_student8 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student8.id
    }
  })

  const course2_student9 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student9.id
    }
  })

  const course2_student10 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student10.id
    }
  })

  const course2_student11 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student11.id
    }
  })

  const course2_student12 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student12.id
    }
  })

  const course2_student13 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student13.id
    }
  })

  const course2_student14 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student14.id
    }
  })

  const course2_student15 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student15.id
    }
  })

  const course2_student16 = await prisma.courseToStudent.create({
    data: {
      courseId: course2.id,
      studentId: student16.id
    }
  })

  const course3_student17 = await prisma.courseToStudent.create({
    data: {
      courseId: course3.id,
      studentId: student17.id
    }
  })
  
  const course3_student18 = await prisma.courseToStudent.create({
    data: {
      courseId: course3.id,
      studentId: student18.id
    }
  })

  const course3_student19 = await prisma.courseToStudent.create({
    data: {
      courseId: course3.id,
      studentId: student19.id
    }
  })

  const course3_student20 = await prisma.courseToStudent.create({
    data: {
      courseId: course3.id,
      studentId: student20.id
    }
  })

  const course4_student21 = await prisma.courseToStudent.create({
    data: {
      courseId: course4.id,
      studentId: student21.id
    }
  })

  const course4_student22 = await prisma.courseToStudent.create({
    data: {
      courseId: course4.id,
      studentId: student22.id
    }
  })

  const course4_student23 = await prisma.courseToStudent.create({
    data: {
      courseId: course4.id,
      studentId: student23.id
    }
  })

  const course4_student24 = await prisma.courseToStudent.create({
    data: {
      courseId: course4.id,
      studentId: student24.id
    }
  })

  const course5_student25 = await prisma.courseToStudent.create({
    data: {
      courseId: course5.id,
      studentId: student25.id
    }
  })

  // student grades

  const student1_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson1.id
        }
      },
      student: {
        connect: {
          id: student1.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student1_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson9.id
        }
      },
      student: {
        connect: {
          id: student1.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student2_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson1.id
        }
      },
      student: {
        connect: {
          id: student2.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student2_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson9.id
        }
      },
      student: {
        connect: {
          id: student2.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student3_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson1.id
        }
      },
      student: {
        connect: {
          id: student3.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student3_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson9.id
        }
      },
      student: {
        connect: {
          id: student3.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student4_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson1.id
        }
      },
      student: {
        connect: {
          id: student4.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student4_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson9.id
        }
      },
      student: {
        connect: {
          id: student4.id
        }
      },
      course: {
        connect: {
          id: course1.id
        }
      }
    }
  })

  const student5_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson3.id
        }
      },
      student: {
        connect: {
          id: student5.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })

  const student5_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson7.id
        }
      },
      student: {
        connect: {
          id: student5.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })

  const student5_grades3 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson10.id
        }
      },
      student: {
        connect: {
          id: student5.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })

  const student6_grades1 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson3.id
        }
      },
      student: {
        connect: {
          id: student6.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })

  const student6_grades2 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson7.id
        }
      },
      student: {
        connect: {
          id: student6.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })

  const student6_grades3 = await prisma.grade.create({
    data: {
      grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
      lesson: {
        connect: {
          id: lesson10.id
        }
      },
      student: {
        connect: {
          id: student6.id
        }
      },
      course: {
        connect: {
          id: course2.id
        }
      }
    }
  })


const student7_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student7.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student7_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student7.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student7_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student7.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student8_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student8.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student8_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student8.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student8_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student8.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student9_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student9.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student9_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student9.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student9_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student9.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student10_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student10.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student10_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student10.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student10_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student10.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student11_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student11.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student11_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student11.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student11_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student11.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student12_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student12.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student12_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student12.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student12_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student12.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student13_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student13.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student13_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student13.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student13_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student13.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student14_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student14.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student14_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student14.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student14_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student14.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student15_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student15.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student15_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student15.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student15_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student15.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student16_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student16.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student16_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson7.id
      }
    },
    student: {
      connect: {
        id: student16.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student16_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson10.id
      }
    },
    student: {
      connect: {
        id: student16.id
      }
    },
    course: {
      connect: {
        id: course2.id
      }
    }
  }
})

const student17_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student17.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student17_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson5.id
      }
    },
    student: {
      connect: {
        id: student17.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student17_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson11.id
      }
    },
    student: {
      connect: {
        id: student17.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student18_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student18.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student18_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson5.id
      }
    },
    student: {
      connect: {
        id: student18.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student18_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson11.id
      }
    },
    student: {
      connect: {
        id: student18.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student19_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student19.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student19_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson5.id
      }
    },
    student: {
      connect: {
        id: student19.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student19_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson11.id
      }
    },
    student: {
      connect: {
        id: student19.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student20_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson3.id
      }
    },
    student: {
      connect: {
        id: student20.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student20_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson5.id
      }
    },
    student: {
      connect: {
        id: student20.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student20_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson11.id
      }
    },
    student: {
      connect: {
        id: student20.id
      }
    },
    course: {
      connect: {
        id: course3.id
      }
    }
  }
})

const student21_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson4.id
      }
    },
    student: {
      connect: {
        id: student21.id
      }
    },
    course: {
      connect: {
        id: course4.id
      }
    }
  }
})

const student22_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson4.id
      }
    },
    student: {
      connect: {
        id: student22.id
      }
    },
    course: {
      connect: {
        id: course4.id
      }
    }
  }
})

const student23_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson4.id
      }
    },
    student: {
      connect: {
        id: student23.id
      }
    },
    course: {
      connect: {
        id: course4.id
      }
    }
  }
})

const student24_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson4.id
      }
    },
    student: {
      connect: {
        id: student24.id
      }
    },
    course: {
      connect: {
        id: course4.id
      }
    }
  }
})

const student25_grades1 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson2.id
      }
    },
    student: {
      connect: {
        id: student25.id
      }
    },
    course: {
      connect: {
        id: course5.id
      }
    }
  }
})

const student25_grades2 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson6.id
      }
    },
    student: {
      connect: {
        id: student25.id
      }
    },
    course: {
      connect: {
        id: course5.id
      }
    }
  }
})

const student25_grades3 = await prisma.grade.create({
  data: {
    grade: ((Math.floor(Math.random() * 41) + 60) * 0.01),
    lesson: {
      connect: {
        id: lesson8.id
      }
    },
    student: {
      connect: {
        id: student25.id
      }
    },
    course: {
      connect: {
        id: course5.id
      }
    }
  }
})

}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })