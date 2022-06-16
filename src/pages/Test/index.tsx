import { createStore } from 'redux';
import { Button, Col, Input, Row, InputRef } from 'antd';
import { useRef } from 'react';

const Signin: React.FC = () => {
  const emailRef = useRef<InputRef | null>(null);
  const passwordRef = useRef<InputRef | null>(null);

  function click() {
    const email = emailRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;

    console.log(emailRef.current, passwordRef.current);
    console.log({ email, password });
  }

  return (
    <Row align="middle">
      <Col span={24}>
        <Row>
          <Col span={12}>
            <img src="/bg_signin.png" alt="Signin" />
          </Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div>
              Email
              <span>*</span>
            </div>
            <div>
              <Input placeholder="Email" autoComplete="email" ref={emailRef} />
            </div>
            <div>
              Password
              <span> *</span>
            </div>
            <div>
              <Input
                type="password"
                autoComplete="current-password"
                name="email"
                ref={passwordRef}
              />
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  click();
                }}
              >
                Sign In 2
              </button>
              <Button size="large" onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
