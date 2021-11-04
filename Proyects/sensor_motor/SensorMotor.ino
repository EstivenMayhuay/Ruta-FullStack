// variables
const int releMotor = 4;
const int trigger = 2;
const int echo = 3;
long tiempo = 0;
long distancia = 0;
int ledRed = 7;
int ledOrange = 8;
int ledGreen = 9;

void setup() {
  Serial.begin(9600);

  // sensor ultrasonic
  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);

  // leds
  pinMode(ledRed, 7);
  pinMode(ledOrange, 8);
  pinMode(ledGreen, 9);

  // Module rele motor
  pinMode(releMotor, OUTPUT);

  // turn off the motor by default 
  digitalWrite(releMotor, LOW);
  
  // Turn off the pin trigger 
  digitalWrite(trigger, LOW);
}

void loop() {
  // turn on the sensor ultrasonic
  initialTrigger();

  // get the time
  tiempo = getTimeSensor();

  // get the distance
  distancia = getDistance(tiempo);
    
  if(distancia >= 1 && distancia <= 10) {
    digitalWrite(ledRed, HIGH);
    digitalWrite(ledOrange, LOW);
    digitalWrite(ledGreen, LOW);

    // turn on motor
    digitalWrite(releMotor, HIGH);
  }
  else if(distancia >= 30 && distancia <= 80) {
    digitalWrite(ledRed, LOW);
    digitalWrite(ledOrange, HIGH);
    digitalWrite(ledGreen, LOW);
  }
  else if(distancia >= 81) {
    digitalWrite(ledRed, LOW);
    digitalWrite(ledOrange, LOW);
    digitalWrite(ledGreen, HIGH);

    // turn off motor
    digitalWrite(releMotor, LOW);
  }

  // show distance in the Serial Monitor
  showDistanceSerial(distancia);
}

// functions 
void initialTrigger() {
  digitalWrite(trigger, HIGH);
  delayMicroseconds(30);
  digitalWrite(trigger, LOW);
}

void showDistanceSerial (long distance) {
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.print(" cm");
  Serial.println("");
  Serial.println("");
  delay(1000);
}

long getTimeSensor() {
  return pulseIn(echo, HIGH);
}

long getDistance(int time) {
  return time / 59;
}
