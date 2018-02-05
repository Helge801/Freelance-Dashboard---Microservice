10.times do |prop|
  Proposal.create!( customer: "customer #{prop}",
                    portfolio_url: "http://bryan-lund.com",
                    tools: "Ruby on rails, Angular 2, PostgreSQL",
                    estimated_hours: (80 + prop),
                    hourly_rate: 120,
                    weeks_to_complete: 12,
                    client_email: "bryan@gmail.com"
                  )
end