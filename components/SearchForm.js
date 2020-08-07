import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
  return (
    <div className=" mx-auto   mb-4  md:max-w-6xl xl:max-w-4xl">
      <Form className="mb-4 w-full " >
        <Form.Row className="align-items-end">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.description}
              name="description"
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.location}
              name="location"
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col} xs="auto" className="ml-2">
            <Form.Check
              onChange={onParamChange}
              value={params.full_time}
              name="full_time"
              id="full-time"
              label="Only Full Time"
              type="checkbox"
              className="mb-2"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
