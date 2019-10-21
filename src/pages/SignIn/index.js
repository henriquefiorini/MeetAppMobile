import React, { useState } from 'react';

import { Page, Form, Input, Button, Link } from '~/components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page title="Sign In" verticalAlign="center">
      <Form>
        <Input
          label="Email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button>Sign In</Button>
      </Form>
      <Link>Don&apos;t have an account? Sign Up</Link>
    </Page>
  );
}
