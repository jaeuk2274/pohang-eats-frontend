import React from 'react'
import { render } from "@testing-library/react";
import { FormError } from '../form-error'

describe("<Render />", () => {
    it("renders OK with props", () => {
        const { getByText } = render(<FormError errorMessage="test" />);
        getByText("test");
    })
})