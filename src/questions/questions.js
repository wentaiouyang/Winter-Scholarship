const questions = [
  {
    id: 0,
    quesNum: 'q1',
    quesName:
      'Do students in all year levels receive 120 minutes of scheduled PE (not including sport) every week?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels receive 120 minutes of scheduled PE (not including sport) every week',
      'No, students in all year levels receive 120 minutes of scheduled PE (not including sport), but not every week. ',
      'No, only students in some year levels receive 120 minutes of scheduled PE (not including sport) every week.'
    ]
  },
  {
    id: 1,
    quesNum: 'q2',
    quesName:
      'Are all scheduled PE lessons for all students delivered by a tertiary qualified PE specialist teacher?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, all scheduled PE lessons are delivered by a tertiary qualified PE specialist teacher. ',
      'No, only some scheduled PE lessons are delivered by a tertiary qualified PE specialist teacher.',
      'No scheduled PE lessons are taught by a tertiary qualified PE specialist teacher.'
    ]
  },
  {
    id: 2,
    quesNum: 'q3',
    quesName:
      'Is the teacher/student ratio in PE lessons about the same to that of other subjects? (Do not count aides and volunteers as teachers)',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, the ratio is about the same in PE lessons as that of other subjects.',
      'No, the ratio is somewhat larger (up to one and a half times larger) in PE than other lessons.',
      'No, the ratio is considerably larger (more than one and a half times larger) in PE than other lessons.'
    ]
  },
  {
    id: 3,
    quesNum: 'q4',
    quesName:
      'Do staff who teach PE in your school attend a minimum of one professional development session per year specifically targeting PE?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, all staff who teach PE in our schools attend a minimum of one PE- specific professional development session per year. ',
      'No, only some staff who teach PE in our school attend a minimum of one PE- specific professional development session per year. ',
      'No staff who teach PE in our school attend a minimum of one PE-specific professional development session per year. '
    ]
  },
  {
    id: 4,
    quesNum: 'q5',
    quesName:
      'Do staff in your school withhold PE as punishment (e.g., for poor behaviour or unfinished academic work)?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'No staff in our school withhold PE as punishment.',
      'Yes, some or all staff in our school withhold PE as punishment. ',
      'Yes, some or all staff in our school withhold PE as punishment. '
    ]
  },
  {
    id: 5,
    quesNum: 'q6',
    quesName:
      'Are students in all year levels provided with at least 60 minutes for recess / lunchtime play every day (all breaks/lunches combined), during which they can be active if they wish?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels are provided with at least 60 minutes for recess / lunchtime play every day, during which they can be active if they wish.',
      'No, only students in some year levels are provided with at least 60 minutes for recess / lunchtime play every day, during which they can be active if they wish. ',
      'No, students in all years levels are provided with less than 60 minutes for recess / lunchtime play every day, during which they can be active if they wish.  '
    ]
  },
  {
    id: 6,
    quesNum: 'q7',
    quesName:
      'Are students in all year levels specifically taught playground games and activities (e.g., ball games, tag games, four square, etc.) in PE that they can engage in during recess / lunchtime breaks?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels are specifically taught playground games and activities in PE that they can engage in during recess / lunchtime breaks.',
      'No, only students in some year levels are specifically taught playground games and activities in PE that they can engage in during recess / lunchtime breaks. ',
      'o playground games and activities are taught in PE specifically for the purpose of increasing recess / lunchtime break activity.'
    ]
  },
  {
    id: 7,
    quesNum: 'q8',
    quesName:
      'Are students in all year levels provided with equipment (e.g. balls, skipping ropes, hula hoops, bean bags, etc.) during all recess / lunchtime breaks?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels are provided with equipment during all recess / lunchtime breaks.',
      'No, only students in some year levels are provided with equipment during all recess / lunchtime breaks. ',
      'No equipment is provided during recess / lunchtime breaks at this school.'
    ]
  },
  {
    id: 8,
    quesNum: 'q9',
    quesName:
      'Are students in all year levels provided with opportunities to participate in planned/organised physical activities (e.g. walking/running programs, games) during all recess / lunchtime breaks?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels are provided with opportunities to participate in planned/organised physical activities during all recess / lunchtime breaks.',
      'No, only students in some year levels are provided with opportunities to participate in planned/organised physical activities during all recess / lunchtime breaks. ',
      'No opportunities to participate in planned/organised physical activities are provided during recess  '
    ]
  },
  {
    id: 9,
    quesNum: 'q10',
    quesName:
      'Are students in all year levels provided with activity cards they can use during all recess / lunchtime breaks? *(Activity cards include suggestions and/or instructions for a variety of activities students can choose to engage in)',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, students in all year levels are provided with activity cards during all recess / lunchtime breaks.',
      'No, only students in some year levels are provided with activity cards during all recess / lunchtime breaks.  ',
      'No activity cards are provided at this school during recess / lunchtime breaks. '
    ]
  },
  {
    id: 10,
    quesNum: 'q11',
    quesName:
      'Are playground surfaces with lines for games (e.g., four square, hopscotch, soccer, etc.) or murals (e.g., castles, dragons, mazes) available at your school for students to use during all recess / lunchtime breaks?',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, playground surfaces with lines for games or murals are available at our school for students to use during all recess / lunchtime breaks. ',
      'No, playground surfaces with lines for games or murals are only available at our school for students to use during one recess / lunchtime break.  ',
      'No playground surfaces with lines for games or murals are available at ourschool '
    ]
  },
  {
    id: 11,
    quesNum: 'q12',
    quesName:
      'Are designated ‘activity zones’ available at your school for students to use during all recess / lunchtime breaks? (*Activity zones are designated areas used for specific types of activities or specific groups of students).',
    answer: ['mbp', 'pmbp', 'nmbp'],
    options: [
      'Yes, designated activity zones are available at our school for students to use during all recess / lunchtime breaks. ',
      'No, designated activity zones are only available at our school for students to use during one recess / lunchtime break. ',
      'No designated activity zones are available at our school.  '
    ]
  }
]

export default questions
