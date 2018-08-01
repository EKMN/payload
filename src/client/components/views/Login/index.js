import React from 'react';
import { Link } from 'react-router-dom';
import ContentBlock from 'payload/client/components/layout/ContentBlock';
import Logo from 'demo/client/components/graphics/Logo';
import Form from 'payload/client/components/forms/Form';
import Input from 'payload/client/components/forms/Input';
import Button from 'payload/client/components/controls/Button';

import './index.css';

export default () => {
  return (
    <ContentBlock className="login" width="narrow">
      <Logo />
      <Form
        method="POST"
        action="https://payloadcms.us18.list-manage.com/subscribe/post?u=f43c9eb62d4ce02e552a1fa9f&amp;id=e11798f237"
        redirect="/sessions/confirmation">
        <Input type="email" label="Email Address" id="email" required />
        <Input type="password" label="Password" id="password" required />
        <Button type="submit">
          Log In
        </Button>
      </Form>
      <Link to="/">To Dashboard</Link>
    </ContentBlock>
  );
};