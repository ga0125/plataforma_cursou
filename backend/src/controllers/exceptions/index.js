function emailAlreadyExists(res) {
  return res.status(409).send({
    code: 409,
    message: 'Email already exists.',
  });
}

function courseAlreadyExists(res) {
  return res.status(409).send({
    code: 409,
    message: 'Course title already exists.',
  });
}

function enrollmentAlreadyExists(res) {
  return res.status(409).send({
    code: 409,
    message: 'The student already enrolled.',
  });
}

function notFoundException(res) {
  return res.status(404).send({
    code: 404,
    message: 'Not found.',
  });
}

function genericServerException(res) {
  return res.status(500).send({
    code: 500,
    message: 'Unexpected internal server error.',
  });
}

module.exports = {
  emailAlreadyExists,
  courseAlreadyExists,
  enrollmentAlreadyExists,
  notFoundException,
  genericServerException,
};
