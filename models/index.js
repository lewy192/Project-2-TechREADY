const User = require("./User");
const IsTutor = require("./IsTutor");
const Comment = require("./Comment");
const Question = require("./Question");
const Reputation = require("./Reputation");
const QuizResult = require("./QuizResult");
const Note = require("./Note");
const TutorRole = require("./TutorRole");

User.hasMany(Question, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Question.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasOne(Reputation, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Reputation.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasOne(QuizResult, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

QuizResult.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Question.hasMany(Comment, {
    foreignKey: "question_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(Question, {
    foreignKey: "question_id",
    onDelete: "CASCADE",
});

User.hasMany(Note, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Note.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasOne(TutorRole, {
    foreignKey: "id",
    onDelete: "CASCADE",
});
TutorRole.belongsTo(User, { foreignKey: "id", onDelete: "CASCADE" });

// User.belongsToMany(Tutor, {
//     through: 'Lesson',
//     as: 'user_tutors'
// });
//
// Tutor.belongsToMany(User, {
//     through: 'Lesson',
//     as: 'tutor_users'
// });

module.exports = {
    User,
    IsTutor,
    Comment,
    Question,
    Reputation,
    QuizResult,
    Note,
    TutorRole,
};
