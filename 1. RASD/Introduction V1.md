# 1. Introduction
## 1.1 Purpose
*PowerEnJoy* is a digital management system for a car-sharing service that exclusively employs electric cars.
### 1.1.1 Document Goal
The main goal of this document is to completely describe the *PowerEnJoy* system in terms of functional and non-functional requirements, to analyse the real need of the customer for modelling the system, to show the constraints and the software limits and simulate the typical use cases that will occur after the development. This document is intended to all developers and programmers who have to implement the requirements, to the system analysts who want to integrate other system with this one, and could also be used as a contractual basis between the customer and the developer.
### 1.1.2 System Goals
 First, the system should provide the functionality normally provided by car-sharing services. These include:
>>• Users must be able to register to the system by providing their credentials and payment information. They receive back a password that can be used to access the system.
• Registered users must be able to find the locations of available cars within a certain distance from their current location or from a specified address.
• Among the available cars in a certain geographical region, users must be able to reserve a single car for up to one hour before they pick it up.
• If a car is not picked-up within one hour from the reservation, the system tags the car as available again, and the reservation expires; the user pays a fee of 1 EUR.
• A user that reaches a reserved car must be able to tell the system she’s nearby, so the system unlocks the car and the user may enter.
• As soon as the engine ignites, the system starts charging the user for a given amount of money per minute; the user is notified of the current charges through a screen on the car.
• The system stops charging the user as soon as the car is parked in a safe area and the user exits the car; at this point, the system locks the car automatically.
• The set of safe areas for parking cars is pre-defined by the management system.

In addition to the functionality above, the system should incentivize the virtuous behaviors of the users. Specifically:
>>a) If the system detects the user took at least two other passengers onto the car, the system applies a discount of 10% on the last ride.
b) If a car is left with no more than 50% of the battery empty, the system applies a discount of 20% on the last ride.
c) If a car is left at special parking areas where they can be recharged and the user takes care of plugging the car into the power grid, the system applies a discount of 30% on the last ride.
d) If a car is left at more than 3 KM from the nearest power grid station or with more than 80% of the battery empty, the system charges 30% more on the last ride to compensate for the cost required to re-charge the car on-site.
e) If the user enables the money saving option, he/she can input his/her final destination and the system provides information about the station where to leave the car to get a discount. This station is determined to ensure a uniform distribution of cars in the city and depends both on the destination of the user and on the availability of power plugs at the selected station.

## 1.2 Scope
