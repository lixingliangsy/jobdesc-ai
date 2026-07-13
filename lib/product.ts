export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "JobDesc AI",
  slug: "jobdesc-ai",
  tagline: "Write a structured, inclusive job description in seconds.",
  description: "Paste the role, level, and must-haves and get a clean job description with responsibilities, requirements, and an inclusivity check - ready to post.",
  toolTitle: "Write a job description",
  resultLabel: "Your job description",
  ctaLabel: "Write JD",
  features: [
  "Structured JD",
  "Responsibilities and requirements",
  "Inclusive-language check",
  "Salary-range prompt"
],
  inputs: [
  {
    "key": "role",
    "label": "Role",
    "type": "input",
    "placeholder": "e.g. Senior Backend Engineer"
  },
  {
    "key": "level",
    "label": "Seniority",
    "type": "select",
    "options": [
      "Junior",
      "Mid",
      "Senior",
      "Lead",
      "Manager"
    ]
  },
  {
    "key": "musthaves",
    "label": "Must-have requirements",
    "type": "textarea",
    "placeholder": "e.g. 5+ yrs Python, AWS, payments domain"
  },
  {
    "key": "tone",
    "label": "Tone",
    "type": "select",
    "options": [
      "Professional",
      "Friendly",
      "Concise"
    ]
  }
] as InputField[],
  systemPrompt: "You are an HR copywriter. Given a role, seniority level, must-have requirements, and a tone, write a structured, inclusive job description: a 1-2 sentence summary, 5-7 responsibilities, 5-7 requirements, and a short salary-range prompt. Use inclusive language (avoid 'rockstar', 'ninja', gendered terms). Keep it scannable. In demo (mock) mode, return a realistic sample following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "3 JDs/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const role = (inputs['role'] || 'your role').trim()
  const lvl = inputs['level'] || 'Senior'
  const mh = (inputs['musthaves'] || '').trim()
  const tone = inputs['tone'] || 'Professional'
  if (!role) return 'Name the role to generate a job description.'
  let out = 'JOB DESCRIPTION (' + lvl + ' ' + role + ' | ' + tone + ')\n\n'
  out += 'SUMMARY\nWe are hiring a ' + lvl + ' ' + role + ' to own a core piece of how we ship and measure outcomes.\n\n'
  out += 'RESPONSIBILITIES\n'
  out += '- Own the day-to-day scope of the ' + role + ' function\n'
  out += '- Partner with cross-functional teams on delivery\n'
  out += '- Improve how the team measures quality and speed\n'
  out += '- Mentor where the level calls for it\n\n'
  out += 'REQUIREMENTS\n'
  out += '- ' + (mh || 'Relevant hands-on experience in the field') + '\n'
  out += '- Strong communication and ownership\n'
  out += '- Comfort with ambiguity and pace\n\n'
  out += 'INCLUSIVITY CHECK\nNo gendered or "rockstar/ninja" language; title reads as a real role.\n'
  out += '\n--- (Mock demo. Fill role + must-haves for a tailored JD.)'
  return out
}
}
