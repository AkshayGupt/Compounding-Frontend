import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const TooltipInfo = ({ header, body }) => {
    return (
        < Popover id="popover-basic" >
            <Popover.Header as="h3">{header}</Popover.Header>
            <Popover.Body>
                {body}
            </Popover.Body>
        </Popover >

    )
}

const Tooltip = () =>
(
    <OverlayTrigger trigger="click" placement="right" overlay={TooltipInfo({ header: "A", body: "abcd" })}>
        <span>Test tooltip</span>
    </OverlayTrigger>
);

export default Tooltip;