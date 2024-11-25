module.exports = [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** A super lame component that says Hello with a custom message. */\r\nfunction HelloWorld({message = \"World\"}) {\r\n  return <div>Hello--{message}</div>;\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n  /** Message to display */\r\n  message: PropTypes.string\r\n};\r\n\r\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\r\nimport HelloWorld from 'ps-react-jwilli6/HelloWorld';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <HelloWorld message=\"Pluralsight viewers!!\" />\r\n}\r\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n  getColor = (percent) => {\n    if (this.props.percent === 100) return 'green';\n    return this.props.percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n\n  render() {\n    const {percent, width, height} = this.props;\n    return (\n      <div style={{border: 'solid 1px lightgray', width: width}}>\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }} />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% progress","code":"import React from 'react';\r\nimport ProgressBar from 'ps-react-jwilli6/ProgressBar';\r\n\r\n/** 100% progress */\r\nexport default function Example100Percent() {\r\n  return <ProgressBar percent={100} width={150} />\r\n}"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\r\nimport ProgressBar from 'ps-react-jwilli6/ProgressBar';\r\n\r\n/** 10% progress */\r\nexport default function Example10Percent() {\r\n  return <ProgressBar percent={10} width={150} height={20} />\r\n}"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\r\nimport ProgressBar from 'ps-react-jwilli6/ProgressBar';\r\n\r\n/** 70% progress */\r\nexport default function Example70Percent() {\r\n  return <ProgressBar percent={70} width={150} />\r\n}"}]}]