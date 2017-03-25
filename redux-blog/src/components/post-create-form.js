import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import renderField from '../helpers/render-field';

class PostCreateForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const required = value => value ? undefined : 'Required';

    return (
      <form className="postcreateform" onSubmit={handleSubmit}>
        <Field
          name="title"
          component={renderField}
          type="text"
          label="Title"
          validate={[required]} />

        <Field
          name="categories"
          component={renderField}
          type="text"
          label="Categories"
          validate={[required]} />

        <Field
          name="content"
          component={renderField}
          type="textarea"
          label="Content"
          validate={[required]} />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>Submit</button>

        <Link
          to="/"
          className="postcreateform__cancel btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// Decorate the form component
PostCreateForm = reduxForm({
  form: 'postCreate' // a unique name for this form
})(PostCreateForm);

export default PostCreateForm;
