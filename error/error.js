module.exports = class CustomErrorHandler extends Error {
    constructor(status, message, errors = []) {
        super(message); // Bu err.message-ni to'ldiradi
        this.status = status;
        this.errors = errors;
    }

    // BadRequest har doim 400 bo'ladi, shuning uchun status argumenti kerak emas
    static BadRequest(message, errors = []) {
        return new CustomErrorHandler(400, message, errors);
    }

    // UnAuthorized har doim 401 bo'ladi
    static UnAuthorized(message, errors = []) {
        return new CustomErrorHandler(401, message, errors);
    }

    // Forbidden har doim 403 bo'ladi
    static Forbidden(message, errors = []) {
        return new CustomErrorHandler(403, message, errors);
    }

    // NotFound har doim 404 bo'ladi
    static NotFound(message, errors = []) {
        return new CustomErrorHandler(404, message, errors);
    }
}