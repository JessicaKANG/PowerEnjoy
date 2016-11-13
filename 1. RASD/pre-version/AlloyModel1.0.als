sig Float {
}
sig Position {
	longitude : one Float ,
	latitude : one Float
}

fact positionsAreUnique {
	all p1, p2 : Position | p1.longitude != p2.longitude or p1.latitude != p2.latitude
} 

sig Plug {
}

one abstract sig SafeArea {
	positions: set Position
}{
	#positions > 0
}

sig PowerStation extends SafeArea {
	plugs: some Plug
}
fact plugsEqualtoPositions {
	all ps: PowerStation | #ps.positions = #ps.plugs
}

sig ParkingLot extends SafeArea {
}

sig BatterySensor {
}
sig ChargeDetector {
}
sig OnBoardSystem {
}
sig GravitySensor {
}
sig GPSPositioningSystem {
}

abstract sig Car {
	battery: one BatterySensor,
	charge: one ChargeDetector,
	onboard: one OnBoardSystem,
	sensor: one GravitySensor,
	gps: one GPSPositioningSystem
}
	
