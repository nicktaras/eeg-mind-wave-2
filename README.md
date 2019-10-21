# neurosky-mind-wave-2

NPM Package to read and interpret the incoming data from the Neurosky Mind Wave 2 Head set

# Getting Started

Ensure the library is looking at the correct port.

To do so run: ls /dev/tty.*

When you locate the port e.g. "/dev/tty.MindWaveMobile-SerialPo-15" update the index.js line 2.

# Project Status

This project currently reads the raw incoming data and prints it to the console each 2 seconds.

This project is still at a very experimental stage, please feel free to
use this code to enhance your own project or get in touch to help.

# util terminal commands

ps -ft tty - locate tty usage
