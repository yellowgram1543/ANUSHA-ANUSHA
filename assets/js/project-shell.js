document.addEventListener('DOMContentLoaded', () => {
    // Check if this is a project detail page
    const container = document.querySelector('.project-data-container');
    if (!container) return;

    // 1. Extract metadata
    const meta = document.getElementById('project-meta');
    const exeName = meta.getAttribute('data-exe') || 'PROJECT.EXE';
    const projectTitle = meta.getAttribute('data-title') || 'Project';
    const projectSubtitle = meta.getAttribute('data-subtitle') || '';
    const projectIcon = meta.getAttribute('data-icon') || 'memory';
    const projectNumber = meta.getAttribute('data-number') || 'Project 01';

    const projectGithub = meta.getAttribute('data-github') || '#';
    const projectDemo = meta.getAttribute('data-demo') || '#';

    // 2. Extract content blocks
    const problemHTML = document.getElementById('project-problem')?.innerHTML || '';
    
    // Extract features as li elements, then wrap them in the UI logic
    const featuresList = document.getElementById('project-features');
    let featuresHTML = '';
    if (featuresList) {
        Array.from(featuresList.children).forEach(li => {
            featuresHTML += `
                <li class="flex items-start gap-3 bg-surface-variant/50 p-4 rounded-xl border border-outline-variant">
                    <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span>${li.innerHTML}</span>
                </li>
            `;
        });
    }

    // Extract tech stack spans, wrap them in pills
    const techList = document.getElementById('project-tech');
    let techHTML = '';
    if (techList) {
        Array.from(techList.children).forEach(span => {
            techHTML += `
                <span class="bg-primary text-on-primary font-label-md text-[14px] uppercase font-bold px-4 py-2 rounded-full shadow-sm">${span.innerHTML}</span>
            `;
        });
    }

    // 3. Clear the container and remove 'hidden' class
    container.innerHTML = '';
    container.classList.remove('hidden');

    // 4. Inject the global window shell
    const windowShell = `
        <!-- Retro-Modern Window Container -->
        <div class="w-full max-w-5xl bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-2 border-outline-variant mt-12 relative flex flex-col mx-auto">
            
            <!-- Window Title Bar -->
            <div class="w-full h-16 bg-on-surface border-b-2 border-outline-variant flex items-center px-8 gap-2 shrink-0 relative rounded-t-[2rem]">
                <div class="flex gap-2 z-10">
                    <a href="projects.html" class="w-4 h-4 rounded-full bg-error border-2 border-error/50 hover:bg-error/80 transition-colors cursor-pointer" title="Close (Back to Projects)"></a>
                    <div class="w-4 h-4 rounded-full bg-secondary-container border-2 border-secondary-container/50"></div>
                    <div class="w-4 h-4 rounded-full bg-primary border-2 border-primary/50"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="text-center font-label-xl text-label-xl text-surface-container-lowest font-bold tracking-[0.2em] uppercase">${exeName}</div>
                </div>
            </div>
            
            <!-- Directory Toolbar - Actions -->
            <div class="bg-surface-container-lowest px-8 py-4 border-b-2 border-outline flex flex-wrap gap-4 justify-between items-center shrink-0">
                <div class="flex items-center gap-4">
                    <a href="${projectDemo}" target="${projectDemo === '#' ? '_self' : '_blank'}" class="text-on-primary-container bg-primary-container hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2 font-label-md text-label-md px-6 py-2 border-2 border-outline rounded-full shadow-sm font-bold active:scale-95 cursor-pointer">
                        <span class="material-symbols-outlined text-[18px]">open_in_new</span> View Live Demo
                    </a>
                    <a href="${projectGithub}" target="${projectGithub === '#' ? '_self' : '_blank'}" class="text-on-surface-variant hover:bg-surface-variant transition-colors flex items-center gap-2 font-label-md text-label-md px-6 py-2 border-2 border-outline rounded-full shadow-sm font-bold active:scale-95 cursor-pointer">
                        <span class="material-symbols-outlined text-[18px]">code</span> Source Code
                    </a>
                </div>
                <div class="text-on-surface-variant font-label-md text-label-md font-bold uppercase bg-surface-variant px-4 py-2 rounded-full border-2 border-outline-variant hidden sm:block">
                    Project Detail View
                </div>
            </div>
            
            <!-- Window Content -->
            <div class="p-8 md:p-12 relative z-10 overflow-y-auto flex-grow flex flex-col bg-surface-container-high rounded-b-[2rem] gap-8">
                
                <!-- Header Section -->
                <div class="flex flex-col gap-4 border-b-2 border-outline-variant pb-8">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="bg-primary/10 p-4 rounded-full border-2 border-primary/30 shrink-0">
                            <span class="material-symbols-outlined text-primary text-[40px]">${projectIcon}</span>
                        </div>
                        <div>
                            <span class="font-label-md text-[14px] text-on-secondary-container bg-secondary-container px-4 py-1 rounded-full uppercase tracking-wider font-bold border-2 border-outline-variant mb-2 inline-block">${projectNumber}</span>
                            <h1 class="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[56px] font-black text-on-surface uppercase leading-none mt-2">${projectTitle}</h1>
                        </div>
                    </div>
                    <h2 class="font-headline-md text-headline-md text-primary font-bold uppercase tracking-wide">${projectSubtitle}</h2>
                </div>

                <!-- The Problem (Description) -->
                ${problemHTML.trim() ? `
                <div class="bg-surface-container-lowest border-2 border-outline rounded-[2rem] p-8 shadow-sm">
                    <h3 class="font-label-xl text-label-xl font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant pb-4 mb-6 flex items-center gap-2">
                        <span class="material-symbols-outlined">info</span> The Problem &amp; Concept
                    </h3>
                    <div class="font-body-lg text-body-lg text-on-surface font-medium leading-relaxed">
                        ${problemHTML}
                    </div>
                </div>
                ` : ''}

                <!-- Key Features -->
                ${featuresHTML.trim() ? `
                <div class="bg-surface-container-lowest border-2 border-outline rounded-[2rem] p-8 shadow-sm">
                    <h3 class="font-label-xl text-label-xl font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant pb-4 mb-6 flex items-center gap-2">
                        <span class="material-symbols-outlined">featured_play_list</span> Key Features
                    </h3>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 font-body-md text-body-md text-on-surface font-medium">
                        ${featuresHTML}
                    </ul>
                </div>
                ` : ''}

                <!-- Tech Stack -->
                ${techHTML.trim() ? `
                <div class="bg-surface-container-lowest border-2 border-outline rounded-[2rem] p-8 shadow-sm">
                    <h3 class="font-label-xl text-label-xl font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant pb-4 mb-6 flex items-center gap-2">
                        <span class="material-symbols-outlined">code_blocks</span> Tech Stack
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        ${techHTML}
                    </div>
                </div>
                ` : ''}

            </div>
            
            <!-- Window Status Bar -->
            <div class="bg-surface-variant h-12 flex flex-wrap items-center px-8 border-t-2 border-outline font-label-md text-label-md text-on-surface-variant justify-between shrink-0 font-bold hidden sm:flex rounded-b-[2rem]">
                <div class="flex gap-6">
                    <span class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px]">terminal</span> Executing...</span>
                    <span class="flex items-center gap-2 border-l-2 border-outline-variant pl-6"><span class="material-symbols-outlined text-[16px]">folder_open</span> C:\\Projects\\${projectTitle.replace(/ /g, '')}</span>
                </div>
                <div class="uppercase tracking-wider flex items-center gap-2 text-primary">
                    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Status: SECURE CONNECTION
                </div>
            </div>
            
        </div>
    `;

    container.innerHTML = windowShell;
});
