import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

interface Partnership {
  id: string;
  user_id: string;
  partner_id: string;
  created_at: string;
  partner_email: string;
}

const PartnershipList = () => {
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchPartnerships();
  }, [user]);

  const fetchPartnerships = async () => {
    if (!user) return;

    try {
      // Burada gerçek partnership verilerini çekeceğiz
      // Şimdilik mock data kullanıyoruz
      setPartnerships([]); // Boş liste - gerçek implementasyonda dolduracağız
    } catch (error) {
      console.error('Error fetching partnerships:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="space-y-3">
      {partnerships.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            No partnerships yet. Send an invitation to get started!
          </p>
        </div>
      ) : (
        partnerships.map((partnership) => (
          <Card key={partnership.id} className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{partnership.partner_email}</p>
                <p className="text-xs text-muted-foreground">
                  Partner since {new Date(partnership.created_at).toLocaleDateString()}
                </p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default PartnershipList;