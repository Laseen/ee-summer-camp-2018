const express = require('express');
const router = express.Router();
const topic = require('./topic');
const course = require('./course');
const lesson = require('./lesson');
const question = require('./question');
const answer = require('./answer');
const user = require('./user');
const quizAttempt = require('./quiz-attempt');
const userAnswer = require('./user-answer');
const evaluation = require('./evaluation');
const auth = require('../auth');
const jsend = require('jsend');

router.use(jsend.middleware);
router.get('/top-scores', user.topScore);

router.use(auth.authUser);
router.get('/topics', topic.get);
router.get('/topics/:id/courses', course.get);
router.get('/courses/:id/lessons', lesson.get);
router.get('/questions', question.get);
router.get('/questions/:id', question.getOne);
router.get('/questions/:id/answers', answer.get);
router.get('/answers/:id', answer.getOne);
router.get('/user', user.get);
router.get('/user/quizzes', quizAttempt.get);
router.post('/user/quizzes', quizAttempt.submit);
router.get('/attempts/:id/user-answers', userAnswer.get);
router.post('/attempts/:id/user-answers', userAnswer.submit);
router.post('/evaluation', evaluation.grade);
module.exports = router;
