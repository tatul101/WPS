
## Models

This project contain two models Capability and Process . Capability models has an attribute Processes As array of Process and Process has three attributes namely identifier , jobControlOptions , outputTransmission of type string.

## Component

WpsDemoComponent has an method getCapabilities() to get the Capability object from the WPSService and then assign the result obtained to the Capablities object of the WpsDemoComponent .

/**
 * getCapabilities via HTTP GET
 *
 * @callbackFunction is called with a parameter 'capabilities' after the WPSService was contacted. The parameter 'capabilities'  comprises a TypeScript Object representation of the WPSService response .
 */
public  getCapabilities(){
  this.wpsService.getCapabilities().then(capabilities => {
    //Assigment of the capabilities Response to the WpsDemoComponent's capabilities
    this.capabilities = capabilities;

## Service

WPSService implements a function the GetCapabilityService() that get a response from the WPS Server in XML format . On receiving the result in XML it is parsed to the JSON format by using the xml2js Parser . Then this function return the Capabilty Typescript class object to the component that calls this service .

/**
 * getCapabilities via HTTP GET
 *
 * @callbackFunction is called with a parameter 'res' after the HttpGetResonse is received from the WPS server.
 */
async getCapabilities() {
    var result_to_send;
    let data = await this.httpClient.get(this.Url, {responseType: 'text'})
                         .toPromise()
                         .then(res => data=res);

/** Parsing the XML response to JSON object */
var parser = new xml2js.Parser();
          result_to_send = await new Promise((resolve, reject) => parser.parseString(data, (err, result) => {
                if (err) {
                  reject(err);
                }else {
                  let iterable = result["wps:Capabilities"]["wps:Contents"][0]["wps:ProcessSummary"];
                  let len = iterable.length;
                  console.log(`length of result set : ` + len);


