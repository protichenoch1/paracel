const jobs = [
  { title: 'Product Designer', company: 'Miro', location: 'Amsterdam, Netherlands', type: 'Full-time', category: 'Design', visa: true, logo: 'M', color: '#ffc43d' },
  { title: 'Senior Frontend Engineer', company: 'Zalando', location: 'Berlin, Germany', type: 'Hybrid', category: 'Engineering', visa: true, logo: 'Z', color: '#172d50' },
  { title: 'Growth Marketing Lead', company: 'Notion', location: 'Toronto, Canada', type: 'Full-time', category: 'Marketing', visa: false, logo: 'N', color: '#111' },
  { title: 'People Operations Partner', company: 'Canva', location: 'Sydney, Australia', type: 'Full-time', category: 'Business', visa: true, logo: 'C', color: '#755ee7' },
  { title: 'Platform Engineer', company: 'Wise', location: 'Singapore', type: 'Contract', category: 'Technology', visa: false, logo: 'W', color: '#52a68c' }
];
let activeCategory = 'all';
const jobList = document.getElementById('jobList');
function renderJobs() {
  const query = document.getElementById('keyword').value.toLowerCase();
  const country = document.getElementById('country').value;
  const type = document.getElementById('jobType').value;
  const visaOnly = document.getElementById('visaToggle').checked;
  const filtered = jobs.filter(job => (activeCategory === 'all' || job.category === activeCategory) && (!query || `${job.title} ${job.company} ${job.category}`.toLowerCase().includes(query)) && (!country || job.location.includes(country)) && (!type || job.type === type) && (!visaOnly || job.visa));
  jobList.innerHTML = filtered.length ? filtered.map(job => `<article class="job-card"><div class="job-logo" style="background:${job.color}">${job.logo}</div><div><h3>${job.title}</h3><p>${job.company} · ${job.location}</p><div class="tags"><span class="tag">${job.type}</span>${job.visa ? '<span class="tag">Visa support</span>' : ''}</div></div><div class="job-meta"><b>${job.category}</b><a href="apply.html?job=${encodeURIComponent(job.title)}" aria-label="Apply for ${job.title}">→</a></div></article>`).join('') : '<div class="empty">No roles match those filters just yet. Try broadening your search.</div>';
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); activeCategory = button.dataset.filter; renderJobs(); }));
document.getElementById('searchButton').addEventListener('click', renderJobs);
document.getElementById('visaToggle').addEventListener('change', renderJobs);
document.getElementById('newsletterForm').addEventListener('submit', event => { event.preventDefault(); document.getElementById('formMessage').textContent = 'You’re on the list — welcome to the wider world.'; event.target.reset(); });
renderJobs();
