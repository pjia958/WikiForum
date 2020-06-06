import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Generate the schema for your data.
// See: https://mongoosejs.com/docs/guide.html
// timestamps
// With ES6 classes!!!
// Note how we don't need an ID - that's generated for us.
// We also don't need to manually do created / updated timestamps if we need them.

const userSchema = new Schema({
    firstName: {type : String, required: true},  // Basic fields
    lastName: {type: String, required: true},
    email: { type: String, unique: true },
    password: String,
}, { /* This second object allows us to specify more config info. In this case, we're enabling automatic timetamps using the default options.
        For more options, see the URL above. */
    timestamps: {}
});

// Allows us to add an extra "virtual property" to the schema. This value won't actually be stored in the DB, but can be used like
// a normal property, e.g. console.log(myUser.firstName); or myUser.firstName = 'Bob Marley';
userSchema.virtual('fullName')
    .get(function () { return `${this.firstName} ${this.lastName}`; })
    .set(function (value) {
        this.firstName = value.substr(0, value.indexOf(' '));
        this.lastName = value.substr(value.indexOf(' ') + 1);
    });

export const User = mongoose.model('User', userSchema, 'User');

const articleSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    firstName: {type: String},
    lastName: {type: String},
    htmlContent: {type: String},
    // user_id: mongoose.Schema.ObjectId,
    // user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    date: Date,
}, {
    timestamps: {}
});

export const Article = mongoose.model('Article', articleSchema, 'Article');

const opinionSchema = new Schema({
    user_id: mongoose.Schema.ObjectId,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    article_id: mongoose.Schema.ObjectId,
    article: { type: mongoose.Schema.ObjectId, ref: 'discussion' },
    date: Date,
    title: String,
    content: String,
}, {
    timestamps: {}
});
export const Opinion = mongoose.model('Opinion', opinionSchema);
