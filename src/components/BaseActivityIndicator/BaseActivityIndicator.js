  import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  margin:10px;
`

function BaseActivityIndicator({ color, width, height }) {
  return (
    <Wrapper>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        stroke={color}
      >
        <g
          transform="translate(1 1)"
          strokeWidth={2}
          fill="none"
          fillRule="evenodd"
        >
          <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </Wrapper>
  )
}

BaseActivityIndicator.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

BaseActivityIndicator.defaultProps = {
  color: "#fff",
  width: 38,
  height: 38,
}

export default BaseActivityIndicator