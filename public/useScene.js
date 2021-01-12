// This function triggers camera movements in a certain direction
function activateMove(key) {
	switch(key) {
		case 37:
			rotateRight=true;
			break;
		case 39:
			rotateLeft=true;
			break;
	}
}

// This function deactivates the movement of the camera in a given direction
function deactivateMove(key) {
	switch(key) {
		case 37:
			rotateRight=false;
			break;
		case 39:
			rotateLeft=false;
			break;
	}
}

// The function actually updates the camera position
function update() {
// Check if an end-of-shift rotation is taking place
	if(changeViewpoint) {
		if(turn=="b") {
			if(change!=Math.PI) {
				change+=Math.PI/8;
				camera.position.x=Math.sin(change)*10;
				camera.position.z=Math.cos(change)*10;
				camera.lookAt(scene.position);
			} else {
				rotation=Math.PI;
				changeViewpoint=false;
			}
		} else {
			if(change!=0) {
				change-=Math.PI/8;
				camera.position.x=Math.sin(change)*10;
				camera.position.z=Math.cos(change)*10;
				camera.lookAt(scene.position);
			} else {
				rotation=0;
				changeViewpoint=false;
			}
		}
// Otherwise I check if I am rotating by hand
	} else {
		if(rotateRight) {
			rotation+=0.1;
			camera.position.x=Math.sin(rotation)*10;
			camera.position.z=Math.cos(rotation)*10;
			camera.lookAt(scene.position);
		}
		if(rotateLeft) {
			rotation-=0.1;
			camera.position.x=Math.sin(rotation)*10;
			camera.position.z=Math.cos(rotation)*10;
			camera.lookAt(scene.position);
		}
	}
}