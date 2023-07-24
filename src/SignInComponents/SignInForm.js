import React from 'react'
import '../stylesheets/SignInForm.css'
import { Formik, Field } from "formik";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, FormErrorMessage, Input, VStack, } from '@chakra-ui/react'

function SignInForm() {


  return (
      <div className='signin-form'>
        <Flex className='signin-container' align="center" justify="center" h="100vh">
          <Box className="form-box">
            <div className='row'>
              <h1>
                Sign In
              </h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
                console.log(values)
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl className='formbox'>
                      <FormLabel htmlFor="email" className="form-text">
                        <Field
                          className='inputField'
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          placeholder="email or phone number"
                        />
                      </FormLabel>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password && touched.password}>
                      { }
                      <FormLabel htmlFor="password" className="form-text">
                        <Field
                          className='inputField'
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                          placeholder="password"
                          validate={(value) => {
                            let error;
                            if (value.length < 6) {
                              error = "Password must contain at least 6 characters";
                            }
                            return error;
                          }}
                        />
                      </FormLabel>
                      <FormErrorMessage><p className='errorMessage'>{errors.password}</p></FormErrorMessage>
                    </FormControl>
                    <Button type="submit" width="full" className="form-button" >
                      Sign In
                    </Button>
                  </VStack>
                  <div className='help-section'>
                    <div className='row'>
                      <div className='col'>
                        <div className='remember-me'>
                          <Field
                            as={Checkbox}
                            id="rememberMe"
                            name="rememberMe"
                          >
                            <label for="check"> Remember Me</label>
                          </Field>
                        </div>
                      </div>
                      <div className='col'>
                        <label className='help-link'><a href="/">Need help?</a></label>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <div className='bottom-section'>
              <p className='new'>New to Netflix?
                <a href="/">Sign Up now.</a>
              </p>
              <p className='protected'>This page is protected by Google reCAPTCHA  to<br />
                ensure you're not a bot. <a href="/" className='learn-more'>Learn more.</a></p>
            </div>
          </Box>
        </Flex>
      </div>
  )
}

export default SignInForm