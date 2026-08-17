document.addEventListener('DOMContentLoaded', () => {
    // Determine the current page
    const page = document.body.dataset.page || 'unknown';

    // 1. Inject Header (Only if NOT home page)
    if (page !== 'home') {
        const backText = page === 'project-detail' ? 'Back to Projects' : 'Back to Desktop';
        const backLink = page === 'project-detail' ? 'projects.html' : 'index.html';
        
        const header = document.createElement('header');
        header.className = 'fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16 bg-surface-variant/40 backdrop-blur-xl border-b-2 border-outline-variant';
        header.innerHTML = `
            <div class="flex items-center gap-4">
                <a class="font-label-xl text-label-xl font-bold text-on-surface tracking-tighter hover:text-primary transition-colors flex items-center gap-2" href="${backLink}">
                    <span class="material-symbols-outlined">arrow_back</span>
                    ${backText}
                </a>
            </div>
        `;
        document.body.prepend(header);
    }

    // 2. Inject Taskbar Footer (All Pages)
    const taskbar = document.createElement('footer');
    taskbar.className = 'fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-2 bg-surface/90 backdrop-blur-xl h-16 shadow-[0px_-4px_16px_rgba(0,0,0,0.1)] border-t border-surface-variant';
    
    let searchBarHTML = '';
    if (page === 'home') {
        searchBarHTML = `
            <div class="flex-1 max-w-md">
                <div class="relative flex items-center h-10 w-full bg-surface-variant rounded-full focus-within:ring-2 focus-within:ring-primary transition-all">
                    <span class="material-symbols-outlined text-on-surface-variant px-4">search</span>
                    <input id="desktop-search" class="w-full bg-transparent border-none text-on-surface placeholder:text-outline focus:ring-0 font-label-md text-label-md h-full outline-none" placeholder="Search files..." type="text"/>
                </div>
            </div>
        `;
    } else {
        searchBarHTML = `<div class="flex-1 max-w-md"></div>`;
    }

    taskbar.innerHTML = `
        ${searchBarHTML}
        <!-- System Tray (Right) -->
        <div class="flex items-center gap-4 text-on-surface relative">
            <!-- Brightness Container -->
            <div class="relative">
                <button id="brightness-btn" class="p-2 hover:bg-surface-variant transition-colors rounded-full active:scale-95 duration-75 flex items-center justify-center">
                    <span class="material-symbols-outlined" data-weight="fill" style="font-variation-settings: 'FILL' 1;">light_mode</span>
                </button>
                <div id="brightness-popup" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-surface p-4 rounded-xl shadow-lg border border-surface-variant z-50 min-w-[150px]">
                    <div class="text-xs font-bold mb-2 text-on-surface">Brightness</div>
                    <input type="range" id="brightness-slider" min="0" max="100" value="100" class="w-full">
                </div>
            </div>
            <!-- Battery Container -->
            <div class="flex items-center gap-1 font-label-xl text-label-xl font-bold text-on-surface tracking-tighter bg-surface-variant px-3 py-1 rounded-full" title="Battery Status">
                <span class="material-symbols-outlined text-[20px]" id="battery-icon" data-weight="fill" style="font-variation-settings: 'FILL' 1;">battery_full</span>
                <span id="battery-text">--%</span>
            </div>
            <!-- Clock Container -->
            <div id="clock-display" class="font-label-xl text-label-xl font-bold text-on-surface tracking-tighter bg-surface-variant px-4 py-1 rounded-full">
                --:-- --
            </div>
        </div>
    `;
    document.body.append(taskbar);

    // 2.5 Initialize Search Functionality (Home Page Only)
    if (page === 'home') {
        const searchInput = document.getElementById('desktop-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const desktopIcons = document.querySelectorAll('.folder-icon');
                
                desktopIcons.forEach(icon => {
                    const label = icon.querySelector('span').textContent.toLowerCase();
                    if (label.includes(searchTerm)) {
                        icon.style.display = 'flex';
                    } else {
                        icon.style.display = 'none';
                    }
                
    // 9. Scorbunny Interaction
    const scorbunny = document.querySelector('.scor');
    if (scorbunny) {
        document.addEventListener('mousemove', (e) => {
            const rect = scorbunny.getBoundingClientRect();
            // Center of the bunny
            const bunnyCenterX = rect.left + rect.width / 2;
            
            if (e.clientX < bunnyCenterX) {
                // Mouse is to the left
                scorbunny.style.setProperty('--head-transform', 'rotate(-20deg)');
                scorbunny.style.setProperty('--body-transform', 'translateX(40%) scaleX(1.1)');
            } else {
                // Mouse is to the right
                scorbunny.style.setProperty('--head-transform', 'rotate(20deg)');
                scorbunny.style.setProperty('--body-transform', 'translateX(-40%) scaleX(1.1)');
            }
        });
    }

});
            });
        }
    }

    // 3. Inject Brightness Overlay
    if (!document.getElementById('brightness-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'brightness-overlay';
        overlay.className = 'fixed inset-0 bg-black opacity-0 pointer-events-none z-[9998] transition-opacity duration-200';
        document.body.prepend(overlay);
    }

    // 4. Inject Custom Cursor
    let cursor = document.getElementById('custom-cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.className = 'w-8 h-8 text-secondary material-symbols-outlined';
        cursor.style = 'font-variation-settings: "FILL" 1; transform: translate(-12px, -4px) scale(1); color: #000000; left: -100px; top: -100px;';
        cursor.innerText = 'pan_tool_alt';
        document.body.prepend(cursor);
    }

    // 5. Custom Cursor Logic
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-12px, -4px) scale(0.8)';
        cursor.style.color = '#e040a0'; // primary
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-12px, -4px) scale(1)';
        cursor.style.color = '#000000'; // black
    });

    // Hover effects on interactive elements
    const setupInteractables = () => {
        const interactables = document.querySelectorAll('button, input, a, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.innerText = 'touch_app';
            });
            el.addEventListener('mouseleave', () => {
                cursor.innerText = 'pan_tool_alt';
            });
        });
    };
    setupInteractables();

    // 6. Clock Logic
    const clockDisplay = document.getElementById('clock-display');
    if (clockDisplay) {
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            clockDisplay.innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
    }

    // 7. Brightness Logic
    const brightnessBtn = document.getElementById('brightness-btn');
    const brightnessPopup = document.getElementById('brightness-popup');
    const brightnessSlider = document.getElementById('brightness-slider');
    const brightnessOverlay = document.getElementById('brightness-overlay');

    if (brightnessBtn && brightnessPopup && brightnessSlider) {
        brightnessBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            brightnessPopup.classList.toggle('hidden');
        });

        brightnessSlider.addEventListener('input', (e) => {
            const val = 100 - e.target.value;
            brightnessOverlay.style.opacity = (val / 100) * 0.8;
        });

        document.addEventListener('click', (e) => {
            if (!brightnessBtn.contains(e.target) && !brightnessPopup.contains(e.target)) {
                brightnessPopup.classList.add('hidden');
            }
        });
    }

    // 8. Battery Logic
    const batteryText = document.getElementById('battery-text');
    const batteryIcon = document.getElementById('battery-icon');

    if (batteryText && batteryIcon && 'getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            function updateBatteryStatus() {
                const level = Math.round(battery.level * 100);
                batteryText.innerText = level + '% ' + (battery.charging ? '(Charging)' : '');
                
                if (battery.charging) {
                    batteryIcon.innerText = 'battery_charging_full';
                } else if (level > 80) {
                    batteryIcon.innerText = 'battery_full';
                } else if (level > 40) {
                    batteryIcon.innerText = 'battery_5_bar';
                } else if (level > 10) {
                    batteryIcon.innerText = 'battery_2_bar';
                } else {
                    batteryIcon.innerText = 'battery_alert';
                }
            }
            
            updateBatteryStatus();
            battery.addEventListener('levelchange', updateBatteryStatus);
            battery.addEventListener('chargingchange', updateBatteryStatus);
        });
    } else if (batteryText) {
        batteryText.innerText = 'API Not Supported';
    }

    // 9. Scorbunny Interaction
    const scorbunny = document.querySelector('.scor');
    if (scorbunny) {
        document.addEventListener('mousemove', (e) => {
            const rect = scorbunny.getBoundingClientRect();
            // Center of the bunny
            const bunnyCenterX = rect.left + rect.width / 2;
            
            if (e.clientX < bunnyCenterX) {
                // Mouse is to the left
                scorbunny.style.setProperty('--head-transform', 'rotate(-20deg)');
                scorbunny.style.setProperty('--body-transform', 'translateX(40%) scaleX(1.1)');
            } else {
                // Mouse is to the right
                scorbunny.style.setProperty('--head-transform', 'rotate(20deg)');
                scorbunny.style.setProperty('--body-transform', 'translateX(-40%) scaleX(1.1)');
            }
        });
    }

    // 10. Cat Eyeball Tracking
    const leftEyeball = document.getElementById('lefteyeball');
    const rightEyeball = document.getElementById('righteyeball');
    
    if (leftEyeball || rightEyeball) {
        document.addEventListener('mousemove', (e) => {
            const moveEyeball = (eyeball) => {
                if (!eyeball) return;
                
                const rect = eyeball.getBoundingClientRect();
                // Screen coordinates of the eye center
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;
                
                // Vector to mouse
                const dx = e.clientX - eyeCenterX;
                const dy = e.clientY - eyeCenterY;
                
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxMove = 1.2; // Keep it subtle so the pupil doesn't leave the white part
                
                let moveX = 0;
                let moveY = 0;
                
                if (distance > 0) {
                    // Ease the movement based on distance
                    moveX = (dx / distance) * Math.min(distance * 0.01, maxMove);
                    moveY = (dy / distance) * Math.min(distance * 0.01, maxMove);
                }
                
                // Apply subtle translation to the eye grouping
                eyeball.style.transform = `translate(${moveX}px, ${moveY}px)`;
            };
            
            moveEyeball(leftEyeball);
            moveEyeball(rightEyeball);
        });
    }

});

